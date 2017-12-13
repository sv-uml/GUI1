<?php
require_once("config.php");
/**
 * SQLite connnection
 */
class Connection {
    /**
     * PDO instance
     * @var type 
     */
    private $pdo;
 
    /**
     * return in instance of the PDO object that connects to the SQLite database
     * @return \PDO
     */
    public function connect() {
        if ($this->pdo == null) {
            $this->pdo = new \PDO("sqlite:" . PATH_TO_SQLITE_FILE);
        }
        return $this->pdo;
    }

    public function getJobs() {
        $stmt = $this->pdo->query("SELECT * FROM jobs");
        $jobs = [];
        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $jobs[] = [
                'id' => $row['id'],
                'title' => $row['title'],
                'shortdescription' => $row['shortdescription'],
                'description' => $row['description'],
                'location' => $row['location'],
                'responsibilities' => $row['responsibilities'],
                'qualifications' => $row['qualifications'],
                'datetime' => $row['datetime']
            ];
        }
        return json_encode($jobs);
    }
    
    public function getJob($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM jobs WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        $jobs = [];
        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $jobs[] = [
                'id' => $row['id'],
                'title' => $row['title'],
                'shortdescription' => $row['shortdescription'],
                'description' => $row['description'],
                'location' => $row['location'],
                'responsibilities' => $row['responsibilities'],
                'qualifications' => $row['qualifications'],
                'datetime' => $row['datetime']
            ];
        }
        return json_encode($jobs);
    }

    public function createApp($id, $name, $email, $address, $birthdate, $phone, $university, $degree, $company, $position, $skills) {
        $datetime = time();
        $stmt = $this->pdo->prepare("INSERT INTO applications (job, name, email, address, birthdate, phone, university, degree, company, position, skills, datetime) VALUES (:job, :name, :email, :address, :birthdate, :phone, :university, :degree, :company, :position, :skills, :datetime)");
        $stmt->bindParam(':job', $id);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':birthdate', $birthdate);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':university', $university);
        $stmt->bindParam(':degree', $degree);
        $stmt->bindParam(':company', $company);
        $stmt->bindParam(':position', $position);
        $stmt->bindParam(':skills', $skills);
        $stmt->bindParam(':datetime', $datetime);
        if ($stmt->execute()) {
            return "true";
        } else {
            var_dump($stmt->errorInfo());
            return "false";
        }
    }

    public function createJob($title, $shortsummary, $description, $location, $responsibilities, $qualifications) {
        $datetime = time();
        $stmt = $this->pdo->prepare("INSERT INTO jobs (title, shortdescription, description, location, responsibilities, qualifications, datetime) VALUES (:title, :shortdescription, :description, :location, :responsibilities, :qualifications, :datetime)");
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':shortdescription', $shortsummary);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':location', $location);
        $stmt->bindParam(':responsibilities', $responsibilities);
        $stmt->bindParam(':qualifications', $qualifications);
        $stmt->bindParam(':datetime', $datetime);
        if ($stmt->execute()) {
            return "true";
        } else {
            var_dump($stmt->errorInfo());
            return "false";
        }
    }

    public function getAppForJob($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM applications WHERE job = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        $application = [];
        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $application[] = [
                'job' => $row['job'],
                'name' => $row['name'],
                'email' => $row['email'],
                'address' => $row['address'],
                'birthdate' => $row['birthdate'],
                'phone' => $row['phone'],
                'university' => $row['university'],
                'degree' => $row['degree'],
                'company' => $row['company'],
                'position' => $row['position'],
                'skills' => $row['skills']
            ];
        }

        return json_encode($application);
    }
}
?>